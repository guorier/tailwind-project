---
name: luna-flow
description: Run the Codex Luna-max implementation, Claude review and improvement, and joint Codex-Luna-max final verification workflow.
---

Run the task as a three-phase workflow. The task is:

$ARGUMENTS

Status reporting

- Print `STATUS [1/3] Codex Luna-max overall implementation: starting` immediately before the first Codex MCP call.
- Print `STATUS [1/3] Codex Luna-max overall implementation: completed` with the returned thread id, changed files, and checks immediately after it returns.
- Print `STATUS [2/3] Claude readability, security, and improvement review: starting` before reviewing the diff.
- Print `STATUS [2/3] Claude readability, security, and improvement review: completed` with changed files and checks after polishing.
- Print `STATUS [3/3] Joint Codex and Luna-max review, analysis, and final confirmation: starting` immediately before the final Codex MCP call.
- Print `STATUS [3/3] Joint Codex and Luna-max review, analysis, and final confirmation: completed` with findings and check results when it returns.
- Print `STATUS [done] Workflow complete` at the end.
- While a Codex MCP call is running, do not invent intermediate progress; the active `codex` tool call is the live execution indicator.

Phase 1: Codex Luna-max overall implementation

- Use the Codex MCP server tool named `codex`.
- Set `model` to `gpt-5.6-luna`.
- Set `config.model_reasoning_effort` to `max`.
- Set `sandbox` to `workspace-write`.
- Give Codex an explicit file scope and require the smallest complete uncommitted change covering the overall code task.
- Do not allow commits, pushes, dependency installation, or unrelated edits.

Phase 2: Claude readability, security, and improvement review

- Inspect the complete diff left by Codex.
- Check readability, naming, consistency, UX copy, and project conventions.
- If incorrect code is found, fix it with appropriate security improvements and other necessary improvements yourself.
- Check authentication, authorization, input validation, sensitive data handling, storage, injection risks, and unsafe API usage.
- Keep the same file scope and do not broaden the implementation.

Phase 3: Joint Codex and Luna-max review, analysis, and final confirmation

- Use the Codex MCP server tool again with `model` set to `gpt-5.6-luna`.
- Set `config.model_reasoning_effort` to `max`.
- Set `sandbox` to `read-only`.
- Ask Codex and Luna-max to jointly review and analyze the final diff, run relevant non-writing checks, and provide final confirmation with findings, paths, and command results.
- Apply only confirmed fixes, then summarize the final result and remaining risks.

Never let Codex and Claude edit the same files concurrently. Do not commit or push unless the user explicitly asks.
