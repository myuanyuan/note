// git

// git pull --rebase 不会产生一个commit提交
// git rebase 和 git merge 的区别
// git rebase 和 git merge 一样都是用于从一个分支获取并且合并到当前分支，但是他们采取不同的工作方式
// git merge master 那么此时在feature上git 自动会产生一个新的commit(merge commit)
// marge 特点：自动创建一个新的commit 如果合并的时候遇到冲突，仅需要修改后重新commit 记录了真实的commit情况，包括每个分支的详情
// 缺点：因为每次merge会自动产生一个merge commit，所以在使用一些git 的GUI tools，特别是commit比较频繁时，看到分支很杂乱。

// rebase
// git checkout feature
// git rebase master
// rebase 特点：会合并之前的commit历史
// 优点：得到更简洁的项目历史，去掉了merge commit
// 缺点：如果合并出现代码问题不容易定位，因为re - write了history

// 合并时如果出现冲突需要按照如下步骤解决

// 修改冲突部分
// git add
// git rebase--continue
// （如果第三步无效可以执行 git rebase--skip）
// 不要在git add 之后习惯性的执行 git commit命令

// git revert 和 git reset区别
// git revert 仅仅是撤销某次提交，而git reset 会将撤销点之后的操作都回退到暂存区中
// git revert 常用于公共分支 是属于创建一条新的提交记录 不会影响原来的历史记录
// git reset 可以用于私有分支 git reset是直接删除指定的commit


// master

// dev

// feature1
// git add
// git commit
// git rebase feature2
// git add
// git rebase --continue
// git pull
// git push

// feature2

// git add
// git commit
// git rebase feature1
// git add
// git rebase --continue
// git pull
// git push

// 对比
// https://blog.csdn.net/zhuge1127/article/details/82494783

// merge操作就没有rebase那么优雅干净了，直接将代码的修改插入。commit log的顺序按照提交先后
// rebase的优势：如果你在一个分支上的提交有20个，而主干因为团队提交了30个commit，此时主干rebase进来的30个commit肯定排在前面。这样比较符合逻辑，因为虽然按照commit的时间，你有部分代码可能会在30个commit中间，但是并不是稳定的代码就是一堆bug，算不上产出。如果是以稳定为优先级，rebase肯定是最佳的。另外 rebase 的话你所有的提交都会在一起，查找起来会非常方便. git log点线图是一条线看起来非常舒服
// rebase的问题：的确会失去一些关于时间上面的信息，例如分支切出的点信息会丢失。
// merge的优势：就是保证了时间信息的准确性
// merge的问题：引入了一次不必要的history join，git log点线图会非常难看，增加了查看log的成本

// git rebase -i commitID 合并多个commit

// 列出所有仓库中的对象（包括SHA值、大小、路径等），并按照大小降序排列，列出TOP 10
// git rev-list --all | xargs -rL1 git ls-tree -r --long | sort -uk3 | sort -rnk4 | head -10
// git filter-branch --tree-filter "rm -f {filepath}" -- --all
// git push -f --all