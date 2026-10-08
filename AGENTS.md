<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules
- Keep shared brand chrome, solution data and reusable presentation sections in src/components/site.tsx; individual content routes own their metadata and page composition to keep navigation and branding consistent.
- Keep all visual roles in src/styles.css and use semantic Button variants so brand changes apply consistently.
- The quote preparation flow is browser-only and explicitly does not send or persist personal information until a real contact service is configured; this prevents misleading submission confirmations.
- Bundle the shared brand logo from a local image import rather than the Lovable asset proxy so it remains available on external hosts such as Vercel.
