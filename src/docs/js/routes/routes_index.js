var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"AppRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"weather","loadChildren":"./weather/weather.module#WeatherModule","children":[{"kind":"module","children":[{"name":"WeatherRoutes","filename":"src/app/weather/weather-routing.module.ts","module":"WeatherRoutingModule","children":[{"path":"","resolve":{"location":"LocationResolver"},"runGuardsAndResolvers":"always","component":"WeatherComponent","children":[]}],"kind":"module"}],"module":"WeatherModule"}]},{"path":"favorites","loadChildren":"./favorites/favorites.module#FavoritesModule","children":[{"kind":"module","children":[{"name":"FavoritesRoutes","filename":"src/app/favorites/favorites-routing.module.ts","module":"FavoritesRoutingModule","children":[{"path":"","component":"FavoritesComponent","children":[]}],"kind":"module"}],"module":"FavoritesModule"}]},{"path":"**","pathMatch":"full","redirectTo":"weather"}],"kind":"module"},{"name":"ContainerRoutes","filename":"src/app/container/container-routing.module.ts","module":"ContainerRoutingModule","children":[],"kind":"module"}]}
