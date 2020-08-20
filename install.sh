echo ""
echo "Setting up \"Game Description\" Component for Steam FEC"
echo ""

echo ""
echo "  Cloning Repository"
git clone https://github.com/hrr47-FEC-Bailey/game-description/

cd game-description

echo ""
echo "  Installing Dependancies"
npm i

echo ""
echo "  Building Webpack"
npm run-script build

echo "  Game Description Install Complete"
