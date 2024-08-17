# My Portfolio | [Go Live](https://myportfolio-krishna.netlify.app/)

## Description

## Technologies Used

1. [React](https://reactjs.org/)
2. [Tailwind CSS](https://tailwindcss.com/)
3. [Three JS](https://threejs.org/)

### Dependencies

1. [React-Router-Dom](https://github.com/remix-run/react-router)
2. [React Three Fiber](https://react-three-fiber.com/)
3. [React Three Drei](https://github.com/pmndrs/react-three-fiber)
4. [Three JS](https://threejs.org/)
5. [React Vertical Timeline Component](https://github.com/StephenGrider/React-Vertical-Timeline-Component)
6. [Maath](https://github.com/pmndrs/maath)
7. [React Tilt](https://github.com/pmndrs/react-tilt)
8. [EmailJS](https://www.emailjs.com/)
9.

## Go through Resources

### 3D Models Resources

1. [3D Models on Sketchfab](https://sketchfab.com/3d-models)

## Problems Resolved

> [!WARNING]
>
> ### Issue 1 : Light Management in updated Three JS
>
> The value of itensity used has been adjusted to physucally correct values, that means you have a lot more and minute control over them.
>
> In one word, use more intensity to get the results you want. A 1000 would be good to test for spotlights.
>
> - [See this](https://github.com/adrianhajdin/project_3D_developer_portfolio/issues/98)
> - [Goal of new Light](https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733)

> [!NOTE]
>
> ### Issue 2 : How to find if user is on mobile
>
> ```js
> // find if user is on mobile
> const [isMobile, setIsMobile] = useState(false);
> useEffect(() => {
>   const mediaQuery = window.matchMedia("(max-width: 500px)");
>   setIsMobile(mediaQuery.matches);
>   const handleMediaQueryChange = (event) => {
>     setIsMobile(event.matches);
>   };
>   mediaQuery.addEventListener("change", handleMediaQueryChange);
>   return () => {
>     mediaQuery.removeEventListener("change", handleMediaQueryChange);
>   };
> }, []);
> ```
>
> - [Must Read Update](https://stackoverflow.com/questions/44480053/how-to-detect-if-screen-size-has-changed-to-mobile-in-react#:~:text=import%20%7B%20useMediaQuery%20%7D%20from%20'react,Much%20nicer!)
