![image](https://github.com/vinay-64/star-wars-angular/assets/56100155/e97e990e-b9cb-4838-837c-fa806b2de674)# star-wars-angular

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/jbjfmb)



Services:
1) Since the UserListComponent has already obtained the user list from the UserService during its initialization (in the ngOnInit() method), any changes made to the users array in the service will automatically reflect in      the component.
2) When a new user is added through the addUser() method, the UserListComponent will detect the change in the users array and trigger a re-rendering of the component template, displaying the updated list of users.
3) This mechanism is achieved by Angular's change detection system, which keeps track of the component's dependencies and updates the view whenever a relevant change occurs.

Navigating to the component from the same component :
1) Here the default Angular behavior is :
   Initially, the component will load with the ngOnInit() and constructor, but when you later navigate to this component only again with some updated values, Angular by default won't re-instantiate the componet again. Why   
   would it re-render a component we already on ? So, If we are on the same component, it won't recreate whole component and destroy the old one. But If you still want updated data, we can use Observables.

   Here we have used in-built params observable, so we can subscribe to it, and it will execute whenever the params loads new url upon click (say) and we can update the data. This works heavily with Asynchronous tasks, here the route params might change at some point in the future, if the user clicks this link, you don't know when and how long it will take. So, therefore, you can't block this code and wait for this to happen here.

   So, Observable is an easy way to subscribe to some event which might happen in the future, then execute some code when it happens without having to wait for it now. And that is what params is.
   ![image](https://github.com/vinay-64/star-wars-angular/assets/56100155/4bb2b31f-eebb-4422-8e2d-c0b8405e31bb)
