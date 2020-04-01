# nextBusReact
A React app for determining when the next bus will leave given the route, direction, and stop.

This app takes a route, direction, and stop and uses the metro transit API to find the next departure time.  Using react and useEffect, the route and stop names are filtered as you type, and new calls are run on change.  You can click a search result to add its text to your search bar.  

The route search returns the first partial match, and once it has a match, it finds the appropriate directions for the direction field.  If the route is updated, any directional input will be cleared.  

Once a direction is selected, a stop list populates.  The stop selection is similar to the route selection.  Once a stop is selected, a list of departures will be retrieved.  

If the DepartureText of the first element of the departure list reads "Due", the user will be informed that the next departure is due now, and they will also be informed of the time for the following departure.  If the first element reads anything other than "Due", only the first element's depearture text will be displayed.  If the list is empty, the user will be informed that no departures remain for the day.

Here is a quick demo:

[demo](nextBusReact.gif)