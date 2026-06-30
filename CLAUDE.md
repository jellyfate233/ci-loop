# CI Loop 项目规则

## 核心指令

当收到 `/ci-pr-bot` 命令时，按照 `.claude/skills/ci-pr-bot/SKILL.md` 中定义的流程执行：

1. 使用 `gh pr list --state open --json number,headRefName,title,author,body,headRefOid` 获取开放 PR
2. 读取 `.ci-state.json` 检查已处理 PR（如文件不存在则初始化为空对象）
3. 对每个未处理或有新提交的 PR：
   - `gh pr checkout <number>`
   - `npm ci`
   - `npm run test:ci`
   - 若测试失败：分析 `test-results.json` → 修复源文件 → 重新测试 → git commit → git push → `gh pr comment`
4. 更新 `.ci-state.json`

## 项目信息

- GitHub 仓库：通过 `gh repo view --json name,url` 获取
- CI 工作流：`.github/workflows/ci.yml`
- 测试框架：Jest
- 代码检查：ESLint

## 注意事项

- 修复代码后必须通过完整测试套件再推送
- 每次修改最多迭代 3 次
- PR 评论使用中文
- 通过 `.ci-state.json` 追踪状态，避免重复处理
