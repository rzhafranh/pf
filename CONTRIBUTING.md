# 🤝 Contributing Guide

Terima kasih atas minat Anda untuk berkontribusi pada project portfolio ini!

## 🚀 Getting Started

### 1. Fork & Clone

```bash
# Fork repository di GitHub, lalu:
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Branch

```bash
git checkout -b feature/your-feature-name
# atau
git checkout -b fix/bug-description
```

## 📝 Development Workflow

### Running Development Server

```bash
npm run dev
```

### Making Changes

1. Edit files sesuai kebutuhan
2. Test perubahan di browser
3. Ensure responsive design works
4. Check console untuk errors

### Testing

```bash
# Build test
npm run build

# Preview production build
npm run preview
```

## ✅ Commit Guidelines

Gunakan conventional commits format:

```
feat: add new feature
fix: fix bug description
docs: update documentation
style: formatting changes
refactor: code refactoring
test: add tests
chore: maintenance tasks
```

**Examples:**
```bash
git commit -m "feat: add dark mode toggle"
git commit -m "fix: carousel auto-slide timer reset"
git commit -m "docs: update README with new features"
```

## 🎨 Code Style

### JavaScript/React

- Use functional components dengan hooks
- Use arrow functions untuk components
- Consistent naming: camelCase untuk variables, PascalCase untuk components
- Add comments untuk complex logic
- Use destructuring untuk props

**Good:**
```javascript
const MyComponent = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
```

### CSS/Tailwind

- Use Tailwind utility classes
- Responsive design: mobile first
- Consistent spacing & sizing
- Use custom classes di `index.css` untuk reusable styles

**Good:**
```jsx
<div className="flex flex-col md:flex-row gap-4 p-6 rounded-xl bg-dark-card">
  <h2 className="text-2xl md:text-3xl font-bold">Title</h2>
</div>
```

## 📁 File Structure

When adding new files:

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── utils/         # Utility functions (if needed)
├── hooks/         # Custom hooks (if needed)
└── data.js        # Data source
```

## 🐛 Bug Reports

Gunakan GitHub Issues dengan format:

**Title:** Brief description of the bug

**Description:**
- What happened?
- What did you expect to happen?
- Steps to reproduce
- Screenshots (if applicable)
- Browser & OS info

## 💡 Feature Requests

Gunakan GitHub Issues dengan format:

**Title:** Brief description of feature

**Description:**
- What problem does this solve?
- Proposed solution
- Mockups/examples (if applicable)
- Additional context

## 🔍 Pull Request Process

### Before Submitting

- [ ] Code works locally
- [ ] No console errors
- [ ] Responsive design tested
- [ ] Build completes successfully (`npm run build`)
- [ ] Documentation updated (if needed)

### Submitting PR

1. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

2. Create Pull Request di GitHub

3. Fill in PR template:
   ```markdown
   ## Description
   Brief description of changes
   
   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Documentation update
   - [ ] Code refactoring
   
   ## Testing
   How was this tested?
   
   ## Screenshots
   (if applicable)
   ```

4. Wait for review

### After Submission

- Address review comments
- Keep PR updated with main branch
- Be responsive to feedback

## 📚 Documentation

Update documentation when:
- Adding new features
- Changing existing behavior
- Adding new configuration options
- Modifying data structure

Files to consider:
- `README.md` - Overview & getting started
- `DATA_GUIDE.md` - Data structure changes
- `DEPLOYMENT.md` - Deployment process changes
- `ARCHITECTURE.md` - Architecture changes
- `CHANGELOG.md` - Version history

## ⚠️ Important Notes

### Do NOT Include

- Personal data di commits
- API keys atau secrets
- Large binary files (optimize images first)
- node_modules atau dist folders
- IDE-specific files (.vscode, .idea)

### Do Include

- Clear commit messages
- Updated documentation
- Tests for new features (if applicable)
- Screenshots for UI changes

## 🎯 Areas for Contribution

### High Priority

- [ ] Performance improvements
- [ ] Accessibility enhancements
- [ ] Mobile UX improvements
- [ ] Bug fixes

### Medium Priority

- [ ] New animations
- [ ] Additional components
- [ ] Code refactoring
- [ ] Documentation improvements

### Low Priority

- [ ] Style tweaks
- [ ] Minor optimizations
- [ ] Comments & code cleanup

## 🔒 Security

If you discover a security vulnerability:

1. **DO NOT** open a public issue
2. Email directly to: [your-email@example.com]
3. Include:
   - Description of vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

## 📞 Questions?

- Check existing issues & discussions
- Read documentation thoroughly
- Ask in GitHub Discussions
- Contact maintainer

## 🙏 Thank You!

Every contribution helps make this project better. Whether it's:
- Reporting bugs
- Suggesting features
- Improving documentation
- Writing code

**Your effort is appreciated!** ❤️

---

## Code of Conduct

### Our Pledge

We pledge to make participation in this project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Harassment of any kind
- Trolling, insulting/derogatory comments
- Public or private harassment
- Publishing others' private information
- Other conduct which could be considered inappropriate

### Enforcement

Violations may result in:
1. Warning
2. Temporary ban
3. Permanent ban

Report violations to: [your-email@example.com]

---

**Happy Contributing! 🚀**
