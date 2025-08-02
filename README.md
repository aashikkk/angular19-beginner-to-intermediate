# App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# NOTES

To clone specific branch

```bash
git clone --branch <branch_name> --single-branch <repo_url>
```

<img src="/logo.svg" alt="" />
- / --> can access public folder directly

- Generate component

```bash
ng g c <name>
```

- Skeleton

```ts
@Component()
export class Menu {}
```

From Angular 14 Standalone component introduced. So, as default `standalone=true`

```ts
@Component({
  selector: 'app-menu',  // name
  imports: [],
//   templateUrl: './menu.html',
  templete: `html codes`,
  style: `h1{
    font-color: blue
  }`,
//   styleUrl: './menu.css',
  standalone: true // without define its true
})

```

- Previously Angular used Module, now it is not mandatory to use module. But we can still use module if we want.
- To use component in another component, we need to import it in the `imports` array of the parent component.
- But now angular supports `standalone` components, which can be used without a module.

## Data Binding Types

### 1. Data Binding (Component → Template)

#### Interpolation `{{ }}`

Displays component data in the template.

```ts
// Component
export class MyComponent {
  title = "Hello World";
  count = 42;
  user = { name: "John", age: 30 };
}
```

```html
<!-- Template -->
<h1>{{ title }}</h1>
<p>Count: {{ count }}</p>
<p>User: {{ user.name }} is {{ user.age }} years old</p>
<p>Calculation: {{ 5 + 10 }}</p>
```

```ts
export class App {
  protected readonly title = signal("app");
  name = "Aashik";
  onChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
}
```

```html
<main class="p-5">
  Name:
  <input
    class="border border-emerald-200"
    type="text"
    [value]="name"
    (change)="onChange($event)"
  />
  <br />
  {{ name }}
</main>
```

#### Property Binding `[property]`

Binds component properties to HTML element properties.

```ts
// Component
export class MyComponent {
  imageUrl = "/logo.svg";
  isDisabled = false;
  buttonClass = "btn-primary";
}
```

```html
<!-- Template -->
<img [src]="imageUrl" [alt]="title" />
<button [disabled]="isDisabled" [class]="buttonClass">Click me</button>
<div [innerHTML]="htmlContent"></div>
```

### 2. Event Binding `(event)` (Template → Component)

Listens to user events and calls component methods.

```ts
// Component
export class MyComponent {
  count = 0;
  message = "";

  increment() {
    this.count++;
  }

  onButtonClick() {
    this.message = "Button was clicked!";
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.message = target.value;
  }
}
```

```html
<!-- Template -->
<button (click)="increment()">Count: {{ count }}</button>
<button (click)="onButtonClick()">Click me</button>
<input (input)="onInputChange($event)" placeholder="Type something" />
<p>{{ message }}</p>
```

### 3. Two-Way Binding `[(ngModel)]` (Component ↔ Template)

Combines property binding and event binding. Changes in either direction are automatically synchronized.

```ts
// Component
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-my-component",
  imports: [FormsModule], // Required for ngModel
  template: `...`,
})
export class MyComponent {
  userName = "";
  email = "";
  isChecked = false;
}
```

```html
<!-- Template -->
<input [(ngModel)]="userName" placeholder="Enter name" />
<p>Hello, {{ userName }}!</p>

<input type="email" [(ngModel)]="email" placeholder="Enter email" />
<p>Email: {{ email }}</p>

<input type="checkbox" [(ngModel)]="isChecked" />
<p>Checked: {{ isChecked }}</p>
```

### Complete Example

```ts
// my-form.component.ts
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-my-form",
  imports: [FormsModule],
  template: `
    <div>
      <!-- Data Binding -->
      <h1>{{ title }}</h1>

      <!-- Property Binding -->
      <button [disabled]="isSubmitting">Submit</button>

      <!-- Event Binding -->
      <button (click)="handleSubmit()">{{ buttonText }}</button>

      <!-- Two-Way Binding -->
      <input [(ngModel)]="formData.name" placeholder="Name" />
      <input [(ngModel)]="formData.email" placeholder="Email" />

      <!-- Display bound data -->
      <div>
        <p>Name: {{ formData.name }}</p>
        <p>Email: {{ formData.email }}</p>
      </div>
    </div>
  `,
})
export class MyFormComponent {
  title = "User Registration";
  isSubmitting = false;
  buttonText = "Submit Form";

  formData = {
    name: "",
    email: "",
  };

  handleSubmit() {
    this.isSubmitting = true;
    console.log("Form submitted:", this.formData);

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.buttonText = "Form Submitted!";
    }, 2000);
  }
}
```

### Key Points:

- **Interpolation**: `{{ }}` - One-way, component to template
- **Property Binding**: `[property]` - One-way, component to template
- **Event Binding**: `(event)` - One-way, template to component
- **Two-Way Binding**: `[(ngModel)]` - Bidirectional, requires FormsModule
- **Attribute Binding**: `[attr.data-id]` - For HTML attributes
- **Class Binding**: `[class.active]` - For CSS classes
- **Style Binding**: `[style.color]` - For inline styles

### Summary

Angular's binding system provides powerful ways to connect your component logic with the template:

1. **Data Binding** enables dynamic content display and makes your UI reactive to component state changes
2. **Event Binding** creates interactive user experiences by responding to user actions
3. **Two-Way Binding** simplifies form handling by automatically synchronizing data between component and template

**Best Practices:**

- Use **Interpolation** for displaying simple data
- Use **Property Binding** for dynamic HTML attributes and properties
- Use **Event Binding** for user interactions and component communication
- Use **Two-Way Binding** for form inputs where you need real-time data sync
- Always import `FormsModule` when using `[(ngModel)]`

This binding system eliminates the need for manual DOM manipulation and makes Angular applications highly maintainable and testable.
