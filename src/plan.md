1. Написать все запросы (сделано)
2. Сделать компонет Navigation (готов) ( <>
     <header className={styles.header}>
       <div className={styles.wrapper}>
           <ul className={styles.nav}>
             <li>
               <NavLink
                 to="/"
                 className={({ isActive }) =>
                   isActive ? styles.active : styles.link
                 }
               >
                 Home
               </NavLink>
             </li>
             <li>
               <NavLink
                 to="/movies"
                 className={({ isActive }) =>
                   isActive ? styles.active : styles.link
                 }
               >
                 Movies
               </NavLink>
             </li>
           </ul>
       </div>
     </header>
     <Outlet />
   </>)

3. Сделать Routes + Route в компоненте App
4. После этого принять ответ бэка для страницы Home и отрисовать все
5. Составить план далее
