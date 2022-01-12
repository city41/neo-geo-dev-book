# copy all images in the book directory over to public, this enables
# the markdown files in the book directory to work as-is, such as vs code preview
# or looking at the file on github. But also lets them work on the website
find ./book -type f \( -iname \*.jpg -o -iname \*.jpeg -o -iname \*.png -o -iname \*.svg -o -iname \*.gif \) -exec cp '{}' public/ \;
