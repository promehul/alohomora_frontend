## Steps to clone the the backend and have the server running

```
$ git clone https://github.com/promehul/Alohomora.git
$ virtualenv env
$ cd alohomora_backend
$ source ~/env/bin/activate
$ pip3 install -r requirements.txt
$ python3 manage.py runserver
```