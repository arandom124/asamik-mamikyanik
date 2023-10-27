import React from "react";

export function Error404() {
  return (
    <>
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://blogger.googleusercontent.com/img/a/AVvXsEjyAWIj105N7afViP5et9Mp8PdqKxeIEk1loJtg2l3blxHtawF2GblgZofHrpS0TePmpplcREBBkEcWvyetED028byPztjJrtOQ7vEeJfRyPh14OvOwX9_DrnWtor5NkjR4KYM5ngZekp31uokVgoKjXVE5ije56WXXzzD1z86ERgeSIZB1Qe0R4L0dURE)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-indigo-50">la página solicitada no existe</h1>
          <a href="/"
					className="btn btn-active btn-secondary text-2xl">
					ir a Home</a>
        </div>
      </div>
    </div>
    
    </>
  );
}