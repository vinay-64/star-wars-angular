# star-wars-angular

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
   
*** When you go to another component and come again to the same component, Angular will destroy and re-create the component. But, It won't destroy any subscriptions, and therefore, it will stack into the memory. So, it is recommended to unsubscribe to it, whenever the component destroys using ngOnDestroy() method. 


**Observables:**

   In Angular, an observable is an essential concept used for handling asynchronous data streams. It represents a sequence of values that are emitted over time. Observables are part of the Reactive Extensions for JavaScript (RxJS) library, which is widely used in Angular applications.

   Observables are used extensively in Angular for various purposes, such as handling HTTP requests, event handling, and data manipulation. They provide a way to handle asynchronous operations in a more elegant and streamlined manner compared to traditional callbacks or promises.

   Observables can emit multiple values over time, allowing you to handle data streams that change dynamically. They provide a range of operators to transform, filter, combine, and manipulate the emitted values. Observables follow the Observer pattern, where there are observers (subscribers) that can subscribe to an observable to receive its emitted values.

   Suppose you have a component in your Angular application that needs to display real-time stock prices. You want the stock prices to update dynamically as they change. In this scenario, you can use an observable to handle the data stream of stock prices.

First, you would need to import the necessary modules and services:

![image](https://github.com/vinay-64/star-wars-angular/assets/56100155/f19086f3-798c-4cbd-ac82-22baa99a894c)

   In this example, the StockPricesComponent implements the OnInit interface and contains a property stockPrices to store the fetched stock prices.

   Inside the ngOnInit lifecycle hook, we call the fetchStockPrices() method, which returns an observable representing the stock prices data stream. We subscribe to this observable and assign the emitted prices to the stockPrices property.

   The fetchStockPrices() method uses the interval function from RxJS to simulate fetching stock prices every second. The take(5) operator limits the stream to emit only 5 stock prices for demonstration purposes. In a real scenario, you would replace this with an actual API call to fetch stock prices.

   Finally, in the template, we use the *ngFor directive to iterate over the stockPrices array and display each price.

   With this implementation, the stockPrices array will be updated automatically every second as new prices are emitted by the observable. This allows your component to reactively update the UI with the latest stock prices without manual intervention.

   Note: In a real application, you would typically use Angular's HttpClient module to make actual HTTP requests to an API that provides stock prices. The example above uses the interval function for simplicity and demonstration purposes.

   *** The observables we are subscribed to, over time can emit data. It's an asynchronous task and we are not blocking our current executed code to wait for that emitted data, instead we are subscribing to the observable. So that we will get the emitted data dynamically.



















