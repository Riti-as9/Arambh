# Pre-Submission Checklist

## 1. Environment Setup
- [ ] MongoDB is running locally or connected via MongoDB Atlas
- [ ] Backend .env file exists with valid MONGO_URI, PORT, ADMIN_EMAIL, ADMIN_PASSWORD
- [ ] Frontend .env file exists with valid VITE_API_URL

## 2. Dependencies
- [ ] Root dependencies installed: `npm install`
- [ ] Backend dependencies installed: `cd backend && npm install`
- [ ] Frontend dependencies installed: `cd frontend && npm install`
- [ ] All dependencies are up-to-date (no critical vulnerabilities)

## 3. Backend
- [ ] Backend server starts without errors: `npm run dev:backend`
- [ ] GET /api/health returns `{"success": true, ...}`
- [ ] MongoDB connection is established
- [ ] All API endpoints work as expected (test with Postman/Thunder Client)

## 4. Frontend
- [ ] Frontend dev server starts without errors: `npm run dev:frontend`
- [ ] No React Router broken links
- [ ] All forms submit correctly with loading/error/success states
- [ ] API calls use environment variables (not hardcoded URLs)
- [ ] All pages render correctly on mobile and desktop
- [ ] No console errors in browser dev tools

## 5. Admin Dashboard
- [ ] Can log in with admin credentials
- [ ] Admin sidebar navigation works correctly
- [ ] Dashboard stats display correctly
- [ ] Charts render properly
- [ ] Can update help request statuses

## 6. Design & UI
- [ ] Consistent use of brand colors and fonts
- [ ] All buttons, cards, and tables follow design system
- [ ] Animations/transitions are smooth
- [ ] Custom 404 page displays on invalid routes

## 7. Final Check
- [ ] Can run full project with `npm run dev`
- [ ] All functionality works end-to-end
