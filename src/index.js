import "./styles.css";
import { searchSelect, submitBtn, locationDiv } from "./querySelector";
import { getWeather } from "./locationSearch";

// Responsible for functionality to search item/location
submitBtn().addEventListener("click", () => {
    const search = searchSelect();
    const location = locationDiv();

    getWeather(search.value);
})


/* 

1. user types location

2. Feed into the app div

3. integrate with API, pull weather

4. Pull weather data into app divs

5. Put some placeholder data there

6. Put some API handling functions in

*/ 