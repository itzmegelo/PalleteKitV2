export default function Api() {
  const data = [
    {
      id: "6710bbfe21cbb791aad9c77f",
      colors: ["#a7d7b8", "#b5e1b2", "#c9e6b7", "#e5f9c8", "#f6ffdb"],
      tags: ["green", "soft", "nature", "light", "pastel", "spring"],
      text: "Soft Green",
      likesCount: 105,
      isLiked: false,
      createdAt: "2024-10-17T07:25:50.764Z",
    },
    {
      id: "6715325103ff44a63040601a",
      colors: ["#7a2a2c", "#a75f2f", "#d2a74b", "#a9cbb1", "#6b8f56"],
      tags: [
        "maroon",
        "sage",
        "green",
        "brown",
        "amber",
        "cream",
        "yellow",
        "earthy",
        "nature",
      ],
      text: "Maroon and Sage Green",
      likesCount: 28,
      isLiked: false,
      createdAt: "2024-10-20T16:39:45.907Z",
    },
  ];

  const response = {
    success: true,
    count: data.length,
    data,
  };
  return (
    <div className="p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Developer Documentations
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Access and manage resources via secure RESTful endpoints.
          </p>
        </div>
      </div>
      <section
        id="overview"
        className="section-anchor mb-12 bg-white p-8 rounded-xl shadow-lg dark:bg-gray-800"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          API Overview
        </h2>
        <p className="text-gray-600 mb-4 dark:text-gray-400">
          The Project PaletteKit API provides secure, predictable access to our
          core data resources via a RESTful interface. All requests and
          responses are formatted as JSON.
        </p>
        <div className="p-4 bg-green-100 rounded-lg border border-primary text-primary">
          <p className="font-semibold">Base URL:</p>
          <code className="code-block text-primary">
            https://itzmegelo-backend.onrender.com/
          </code>
        </div>
      </section>
      <h2 className="text-3xl font-bold mt-5 mb-8 text-gray-800 border-b pb-2 dark:text-white">
        Resource Endpoints
      </h2>
      <section
        id="get-users"
        className="section-anchor mb-12 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transition-colors"
      >
        <div className="flex items-center mb-4">
          <span className="text-white bg-green-600 p-1 text-lg">GET</span>
          <code className="text-2xl font-mono text-gray-700 dark:text-gray-400">
            /palette
          </code>
        </div>

        <p className="text-gray-600 mb-4 dark:text-gray-400">
          Retrieves a list of all color palettes.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Request Parameters (Query)
        </h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Parameter
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Required
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                  q
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  string
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  Yes
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                  Maximum number of results to return. Default is 10 or more.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          Successful Response (200 OK)
        </h3>
        <div className="code-block-container">
          <pre
            className="code-block"
            style={{
              backgroundColor: "#282c34",
              color: "#dcdcdc",
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto",
              fontFamily: "monospace",
              whiteSpace: "pre-wrap",
            }}
          >
            {JSON.stringify(response, null, 4)}
          </pre>
        </div>
      </section>

      <section
        id="status-codes"
        className="section-anchor mb-12 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg transition-colors"
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Status Codes Reference
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The API uses standard HTTP response codes to indicate success or
          failure.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-green-600 dark:text-green-400">
                  200
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  OK
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  The request was successful.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-blue-600 dark:text-blue-400">
                  201
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Created
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  A new resource was successfully created.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-green-600 dark:text-green-400">
                  204
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  No Content
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  The request was successful but there is no body to return
                  (e.g., DELETE).
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-yellow-600 dark:text-yellow-400">
                  400
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Bad Request
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  The request was invalid (e.g., missing required fields).
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-red-600 dark:text-red-400">
                  401
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Unauthorized
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  Authentication failed (e.g., invalid token).
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-red-600 dark:text-red-400">
                  404
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Not Found
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  The requested resource was not found.
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-red-600 dark:text-red-400">
                  500
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                  Server Error
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                  An unexpected error occurred on the server.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
