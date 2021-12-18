zip -q -r darwin-firefox-addon.zip images manifest.json popup
echo "Created darwin-firefox-extension.zip"
mkdir build
cp -r popup build/popup
cp -r images build/images
cp manifest.json build/manifest.json
cd build
sed -i 's/"manifest_version": 2/"manifest_version": 3/
        s/browser_action/action/' manifest.json
sed -i 's/browser/chrome/' popup/popup.js

zip -q -r darwin-chrome-extension.zip manifest.json images popup
cd ..
mv build/darwin-chrome-extension.zip .
rm -r build
echo "Created darwin-chrome-extension.zip"
