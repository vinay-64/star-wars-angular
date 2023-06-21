# star-wars-angular

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/jbjfmb)



Services:
1) Since the UserListComponent has already obtained the user list from the UserService during its initialization (in the ngOnInit() method), any changes made to the users array in the service will automatically reflect in      the component.
2) When a new user is added through the addUser() method, the UserListComponent will detect the change in the users array and trigger a re-rendering of the component template, displaying the updated list of users.
3) This mechanism is achieved by Angular's change detection system, which keeps track of the component's dependencies and updates the view whenever a relevant change occurs.
