FROM python:3.10

WORKDIR /app

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
RUN pipenv requirements > requirements.txt
RUN pip install -r requirements.txt

COPY . ./

CMD ["python", "main.py"]

EXPOSE 5050
