# Paginated Posts Table with Filtering

This is a React application built with Ant Design that fetches paginated data from the dummy JSON endpoint (https://dummyjson.com/posts) and displays it in a table. The application includes a multi-select filter based on the 'tags' property and a search input field to filter posts based on text matches in the 'body' property. The state of pagination, filtering, and search is persisted in the URL.

## Features

- **Data Retrieval**: Fetches paginated data from the dummy JSON endpoint (https://dummyjson.com/posts).
- **Table Population**: Displays the fetched data in an Ant Design table with pagination.
- **Multi-Select Filter**: Allows users to filter posts based on the 'tags' property by selecting multiple tags simultaneously.
- **Search Input Field**: Enables users to filter posts based on text matches in the 'body' property.
- **URL Persistence**: The state of pagination, filtering, and search is persisted in the URL, allowing users to share or bookmark the current view.
- **Routing**: Utilizes React Router for handling navigation within the application.
- **Responsive Design**: The application layout adapts gracefully to different screen sizes and devices.
- **Error Handling**: Implements error handling for cases such as failed data retrieval or invalid routes.

## Technologies Used

- React
- Ant Design
- React Router
- Axios

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:
2. Navigate to the project directory:
3. Install the dependencies:
4. Start the development server:
5. Open your browser and visit `http://localhost:3000` to see the application.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).