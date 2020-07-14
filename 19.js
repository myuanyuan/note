
// 找切点 支持切点  pointCut是字符串 并且该切点为function
let findPointCut = (target, pointCut) => {
  if (typeof pointCut === 'string') {
    let func = target.prototype[pointCut];
    if (typeof func === 'function') {
      return func;
    }
  }
  return null;
}

// 增强
let advice = (target, pointCut, advice = {}) => {
  let old = findPointCut(target, pointCut);
  if (old) {
    target.prototype[pointCut] = function () {
      let self = this;
      let args = arguments;
      let joinPoint = {
        target,
        method: old,
        args,
        self
      };
      let { before, round, after, afterReturn, afterThrow } = advice;
      // 前置增强
      before && before.apply(self, joinPoint);
      // 环绕增强
      let roundJoinPoint = joinPoint;
      if (round) {
        roundJoinPoint = Object.assign(joinPoint, {
          handle: () => {
            return old.apply(self, arguments || args);
          }
        });
      } else {
        // 没有声明round增强,直接执行原方法
        round = () => {
          old.apply(self, args);
        };
      }


      if (after || afterReturn || afterThrow) {
        let result = null;
        let error = null;
        try {
          result = round.apply(self, roundJoinPoint);
          // 返回增强
          return afterReturn && afterReturn.call(self, joinPoint, result) || result;
        } catch (e) {
          error = e;
          // 异常增强
          let shouldIntercept = afterThrow && afterThrow.call(self, joinPoint, e);
          if (!shouldIntercept) {
            throw e;
          }
        } finally {
          // 后置增强
          after && after.call(self, joinPoint, result, error);
        }
      } else {
        // 未定义任何后置增强,直接执行原方法
        return round.call(self, roundJoinPoint);
      }
    };
  }
};

// js实现AOP 面向切面编程
let emptyFunc = () => { };
let aop = {
  before(target, pointCut, before = emptyFunc) {
    advice(target, pointCut, { before });
  },
  after(target, pointCut, after = emptyFunc) {
    advice(target, pointCut, { after });
  },
  afterReturn(target, pointCut, afterReturn = emptyFunc) {
    advice(target, pointCut, { afterReturn });
  },
  afterThrow(target, pointCut, afterThrow = emptyFunc) {
    advice(target, pointCut, { afterThrow });
  },
  round(target, pointCut, round = emptyFunc) {
    advice(target, pointCut, { round });
  }
};

export default aop;