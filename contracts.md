# The DNA Group Website - API Contracts

## Overview
A sleek Apple-inspired website for The DNA Group, a business development firm founded by Aaron Bolden.

## Frontend Mock Data (`/app/frontend/src/data/mock.js`)
- `heroData`: Hero section content
- `servicesData`: 6 services with icons (Business Development, Team Building, Digital Marketing, Brand Elevation, Exit Strategies, International Expansion)
- `aboutData`: Aaron Bolden's biography and expertise list
- `sectorsData`: 4 sectors (Entertainment, Nonprofit, Corporate, Fortune 500)
- `contactData`: Contact section headings

## Backend API Endpoints

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, email format)",
  "company": "string (optional)",
  "message": "string (required)"
}
```

**Response (Success - 201):**
```json
{
  "id": "string (uuid)",
  "name": "string",
  "email": "string",
  "company": "string or null",
  "message": "string",
  "created_at": "datetime",
  "status": "received"
}
```

**Response (Error - 422):**
```json
{
  "detail": [
    {
      "loc": ["body", "field_name"],
      "msg": "error message",
      "type": "error_type"
    }
  ]
}
```

### 2. Get Contact Submissions (Admin)
**Endpoint:** `GET /api/contact`

**Response (Success - 200):**
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "company": "string or null",
    "message": "string",
    "created_at": "datetime",
    "status": "string"
  }
]
```

## Database Schema

### Collection: `contact_submissions`
```json
{
  "_id": "ObjectId",
  "id": "string (uuid)",
  "name": "string",
  "email": "string",
  "company": "string or null",
  "message": "string",
  "created_at": "datetime",
  "status": "string (received/read/responded)"
}
```

## Frontend-Backend Integration

### Contact Component Changes:
1. Replace mock `setTimeout` in `handleSubmit` with actual API call
2. Use `axios.post` to `${BACKEND_URL}/api/contact`
3. Handle success/error responses appropriately
4. Show feedback via existing status messages

## Implementation Steps
1. Create Contact model in backend
2. Create POST endpoint for contact form
3. Create GET endpoint for admin (optional)
4. Update frontend Contact.jsx to call real API
5. Remove mock submission delay
