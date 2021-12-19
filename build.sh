mkdir dist
zip -q -r darwin-firefox-addon.zip lib images manifest.json popup
mv darwin-firefox-addon.zip dist
echo "Created dist/darwin-firefox-extension.zip"
mkdir build
cp -r popup build/popup
cp -r images build/images
cp -r lib build/lib

cp background.js build/background.js
cp manifest.json build/manifest.json
cd build
sed -i 's/"manifest_version": 2/"manifest_version": 3/
        s/browser_action/action/
        s/"scripts".*$/"service_worker": "background.js"/' manifest.json
sed -i 's/browser/chrome/' popup/popup.js
sed -i 's/browser/chrome/' background.js
sed -i 's/browserAction/action/' background.js
sed -i 's/browser/chrome/' lib/darwin-import.js

echo -e "importScripts('./lib/darwin-import.js')\n$(cat background.js)" > background.js

zip -q -r darwin-chrome-extension.zip manifest.json images lib popup background.js
cd ..
mv build/darwin-chrome-extension.zip dist/.
rm -r build
echo "Created dist/darwin-chrome-extension.zip"
