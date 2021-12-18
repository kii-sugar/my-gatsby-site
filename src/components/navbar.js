import React from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream, faUser, faPen } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div class="flex items-center">
      <div class="flex border-b border-gray-200 dark:border-gray-700">
        <Link to="/">
          <button class="flex items-center h-10 px-2 py-2 -mb-px text-center text-blue-500/50 bg-transparent border-b-2 border-blue-500/60 sm:px-4 -px-1 dark:border-indigo-400 dark:text-indigo-300 whitespace-nowrap focus:outline-none">
            <FontAwesomeIcon icon={faIceCream}/>
            <span class="mx-1 text-sm sm:text-base"> Home </span>
          </button>
        </Link>

        <Link to="/about">
          <button class="flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
            <FontAwesomeIcon icon={faUser}/>
            <span class="mx-1 text-sm sm:text-base"> About </span>
          </button>
        </Link>

        <Link to="/blog">
          <button class="flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
            <FontAwesomeIcon icon={faPen}/>
            <span class="mx-1 text-sm sm:text-base"> Blog </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default NavBar