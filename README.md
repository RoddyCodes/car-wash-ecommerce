# 🚗 Car Wash Supply E-Commerce Backend

This repository contains the **backend** for a full-stack e-commerce web application designed for a local car wash product seller. Built with Django and Django REST Framework, persisting data in PostgreSQL, and exposing RESTful APIs for a React.js frontend.

---

## 🔧 Tech Stack

- **Backend:** Django 5.2, Django REST Framework
- **Database:** PostgreSQL
- **API:** REST API via DRF ViewSets
- **Frontend:** React.js (located in `frontend/`)
- **Authentication:** Django built-in User model
- **Admin Interface:** Django Admin
- **Hosting (planned):** AWS EC2 + S3

---

## ✅ Completed Features

- **Environment & Database Setup**

  - Installed PostgreSQL and created database `carwashdb`
  - Configured Django project in `backend/` with settings under `backend/config/`
  - `.env` file configured for `DATABASES`, `SECRET_KEY`

- **Data Models** (`store/models.py`)

  - `Product` (name, description, price, image\_url)
  - `Order` (user, created\_at, is\_paid, total\_price)
  - `OrderItem` (order, product, quantity)
  - `CustomerProfile` (User extension with phone, address)

- **Admin Interface**

  - Registered models in `store/admin.py`
  - Created superuser; verified CRUD operations in Django Admin

- **Django REST Framework Integration**

  - Installed `djangorestframework`; added to `INSTALLED_APPS`
  - Enabled `APP_DIRS=True` for DRF templates

- **Serializers & ViewSets**

  - Defined serializers (`ProductSerializer`, `OrderSerializer`, `OrderItemSerializer`, `CustomerProfileSerializer`)
  - Implemented `ProductViewSet`, `OrderViewSet`, `CustomerProfileViewSet` in `store/views.py`

- **Routing**

  - App-level routes in `store/urls.py` via `DefaultRouter` (`/products/`, `/orders/`, `/profiles/`)
  - Project-level URL config in `backend/config/urls.py`, mounting app at `/api/`

- **Testing & Verification**

  - Browsable API accessible at `http://127.0.0.1:8000/api/`
  - Successfully GET/POST `Product` entries via browser and `curl`
  - JSON responses returned as expected

---

## 🚀 Getting Started Locally

### Prerequisites

- Python 3.11
- Node.js & npm
- PostgreSQL

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Visit `http://127.0.0.1:8000/api/` and `http://127.0.0.1:8000/admin/`.

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Visit `http://localhost:3000/`.

---

## 🔭 Next Steps

1. **Connect Frontend to Backend**
   - Use Axios or `fetch` to consume `/api/products/`, `/api/orders/`, `/api/profiles/`
   - Display products, implement add-to-cart and checkout flows
2. **Order Creation Workflow**
   - Build frontend components for cart review and order submission
   - Enhance `OrderSerializer` and `OrderViewSet` to calculate `total_price` server-side
3. **Customer Profile Management**
   - Create profile views in React for users to view and update phone & address
   - Secure endpoints so only authenticated users can access their own profiles
4. **Authentication & Permissions**
   - Integrate JWT authentication with `djangorestframework-simplejwt`
   - Restrict `OrderViewSet` and `CustomerProfileViewSet` to authenticated users
5. **Testing & Quality Assurance**
   - Write unit tests for serializers and viewsets
   - Add integration tests using `pytest-django` or Django’s `TestCase`
6. **Dockerization**
   - Create `Dockerfile` for backend and frontend
   - Use Docker Compose to orchestrate PostgreSQL, Django, and React services
7. **CI/CD Pipeline**
   - Set up GitHub Actions to run tests, lint code, and build Docker images
   - Automate deployments to staging and production environments
8. **Production Deployment**
   - Configure Gunicorn and Nginx for serving the backend
   - Deploy containers to AWS EC2 or Elastic Beanstalk
   - Implement AWS S3 for static/media file storage and configure CORS
9. **Security & Optimization**
   - Obtain SSL certificates via Let’s Encrypt
   - Enable security headers and request throttling
   - Monitor performance with logging and metrics (e.g., Sentry, Prometheus)
10. **Custom Domain & DNS**

- Register and configure a custom domain
- Update DNS records to point to your production server

---

## 🤝 Contributing & Contact

Contributions welcome! Please open issues or pull requests.\
Contact: roddyscodingservice@gmail.com

