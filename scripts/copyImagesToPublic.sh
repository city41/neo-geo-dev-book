# copy all images in the book directory over to public, this enables
# the markdown files in the book directory to work as-is, such as vs code preview
# or looking at the file on github. But also lets them work on the website
find book -iname '*.{svg,png,jpeg,jpg,gif}' -exec cp '{}' public/ \;
