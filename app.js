const btn = document.getElementById("btn");
const country_container = document.getElementById("country-container");
const map = document.getElementById("map");
const sub = document.getElementById("details");
const dest_details = document.querySelector("#dest");

function geo() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      map.innerHTML = `<iframe src="https://maps.google.com/maps?q=${lat},${long}&z=15&output=embed" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>`;

      getLocation(lat, long);
    });
  }
}

const getLocation = async (lat, long) => {
  try {
    const response = await fetch(
      `http://api.positionstack.com/v1/reverse?access_key=d72c6b9912f63eb9912d54fefcf89c7d&query=${lat},${long}`
    );

    const data = await response.json();
    console.log(data);
    const pos = data.data[0];

    country_container.innerHTML = `
  <div class="region">
    <h2>Region</h2>
    <p>${pos.region}</p>
  </div>
  <div class="street">
    <h2>Street</h2>
    <p>${pos.street}</p>
  </div>
  <div class="Address">
    <h2>Address</h2>
    <p>${country.label}</p>
  </div>`;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getdest = e => {
  e.preventDefault();
  //check if input is empty
  if (dest_details.value === "") {
    alert("Pleast enter a valid destination address");
  }
  const task = dest_details.value;
  if (task) {
    //logic of shortest path
    } else {
    }
  }


btn.addEventListener("click", geo());
sub.addEventListener("submit",getdest());
