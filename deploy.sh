yarn build &&
git add . &&
git commit -v &&
git push
git branch x
git checkout x
rm -rf *.json *.js yarn.lock;
mv dist/* ./
rm -rf dist;
git add .
git commit -m update
git push
git checkout main

