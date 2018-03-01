export FLASK_APP=main.py
export FLASK_DEBUG=1
port=${1:-5000}
flask run -p $port
