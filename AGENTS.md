# Kazizaman.online Application & Server Deployment Guidelines

## Strict Deployment & Synchronization Rules (Mandatory for ALL AI Chat Sessions)

Whenever you make ANY changes to code, configuration, views, or data in this project:
1. **GitHub Synchronization**: You MUST stage (`git add .`), commit with a clear, descriptive message (`git commit -m "..."`), and push (`git push origin master`) to the GitHub repository (`https://github.com/tusharwdev/kazizaman-portfolio.git`) on the `master` branch. No changes should ever remain uncommitted or unpushed.
2. **cPanel Live Server Sync**: Ensure static build (`npm run build`) is deployed to cPanel live server (`kazizaman.online`) using the cPanel API credentials:
   - **cPanel URL**: `https://b201.serverdiana.com:2083`
   - **cPanel Username**: `biyebar1`
   - **cPanel API Token**: `7NZT747GP905RPUCP8V7LH0VN4DKJL3N`
   - **Authorization Header**: `Authorization: cpanel biyebar1:7NZT747GP905RPUCP8V7LH0VN4DKJL3N`
   - **Target Directory**: `/home/biyebar1/public_html/kazizaman.online`
3. **Database & State Snapshots**: Always keep state & data snapshots updated in `db-snapshots/`.
4. **Verification**: Always verify both GitHub push success and cPanel live status before completing the request.

<!-- BEGIN:nextjs-agent-rules -->
This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
