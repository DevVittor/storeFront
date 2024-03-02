import {useState,useEffect} from 'react';
export function DarkMode() {

  const [theme,setTheme] = useState("dark");

  useEffect(()=>{
    if(theme != 'dark'){
      document.documentElement.classList.add("light");
    }
  },[theme])

  return (
    <div>DarkModee</div>
  )
}
