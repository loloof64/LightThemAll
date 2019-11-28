package main

import (
	"github.com/leaanthony/mewn"
	"github.com/wailsapp/wails"
)

func generateBoard(sideCellsCount int8) [][]bool {
	arr := make([][]bool, sideCellsCount)
	for i := int8(0); i < sideCellsCount; i++ {
		arr[i] = make([]bool, sideCellsCount)
	}

	return arr
}

func main() {

	js := mewn.String("./frontend/build/static/js/main.js")
	css := mewn.String("./frontend/build/static/css/main.css")

	app := wails.CreateApp(&wails.AppConfig{
		Width:  600,
		Height: 600,
		Title:  "LightThemAll",
		JS:     js,
		CSS:    css,
		Colour: "#131313",
	})
	app.Bind(generateBoard)
	app.Run()
}
