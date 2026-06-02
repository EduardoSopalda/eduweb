# Spec Kit Setup

This repository uses [GitHub Spec Kit](https://github.com/github/spec-kit) to run a spec driven development workflow with Claude Code.

## What was installed

| Tool | Purpose |
|------|---------|
| **uv** | Python tool manager from Astral. Manages the specify CLI environment. |
| **specify** | The Spec Kit CLI. Scaffolds specs, plans, tasks, and implementation phases. |

The `specify init` command also installed the following Claude Code skills under `.claude/skills/`:

- `speckit-constitution`: Establish project principles
- `speckit-specify`: Create a baseline specification
- `speckit-plan`: Create an implementation plan
- `speckit-tasks`: Generate actionable tasks
- `speckit-implement`: Execute implementation

Optional enhancement skills: `speckit-clarify`, `speckit-analyze`, `speckit-checklist`.

## Workflow order

Run these skills in order for each new feature or change:

1. **`/speckit-constitution`**: Review or update the project principles in `.specify/memory/constitution.md`.
2. **`/speckit-specify`**: Write a short specification for the change. This is the source of truth.
3. **`/speckit-plan`**: Turn the spec into a structured plan.
4. **`/speckit-tasks`**: Break the plan into discrete, actionable tasks.
5. **`/speckit-implement`**: Execute the tasks.

Review what was produced at each step before moving to the next. Work on a branch. Open a pull request before merging.

## Repeatable setup

`scripts/setup-spec-kit.sh` installs uv and specify if they are missing, and does nothing if they are already present. It runs automatically at the start of each Claude Code session via the `SessionStart` hook in `.claude/settings.json`.

## Network requirements

The first install requires outbound access to:

- `astral.sh` (to download the uv installer)
- `github.com` (to clone spec-kit and install specify-cli)

If the install is blocked by a network restriction, run this command manually in the project directory:

```sh
curl -LsSf https://astral.sh/uv/install.sh | sh
source "$HOME/.local/bin/env"
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
specify check
```

Once installed, the tools are cached locally and do not require network access on subsequent sessions.
