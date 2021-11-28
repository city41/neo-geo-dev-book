CHAPTERS = 01-intro/index.md 02-hello-world/index.md
TITLE = title.txt

ngbook.epub: ${TITLE} ${CHAPTERS}
	pandoc -o $@ ${TITLE} ${CHAPTERS}