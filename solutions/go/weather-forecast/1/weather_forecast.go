// Package weather provides tools for forecasting the weather in different locations.
package weather

// CurrentCondition stores the current weather condition.
var CurrentCondition string
// CurrentLocation stores the current city location.
var CurrentLocation string

// Forecast returns a sentence with the current location and the current weather affecting it.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
