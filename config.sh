echo ""
echo "Setting up \"Game Description\" Component for Steam FEC"
echo ""

echo ""
echo "  Working on correct/up-to-date branch"
git checkout master
git pull origin master

echo ""
echo "  Installing Dependancies"
npm i

echo ""
echo "  Building Webpack"
npm run-script build