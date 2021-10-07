yarn build &&
git add . &&
git commit -v &&
git push &&
git branch x &&
git checkout x &&
rm -rf *.json *.js yarn.lock src *.sh &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -m update &&
git push -u origin x &&
git checkout main &&
git branch -D x