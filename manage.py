from flask.ext.script import Server, Manager
from flask.ext.migrate import Migrate, MigrateCommand
import os

from server import app, db

migrate = Migrate(app, db, directory='server/migrations')
manager = Manager(app)

manager.add_command('db', MigrateCommand)
manager.add_command("runserver", Server(port=8080))

if __name__ == '__main__':
    manager.run()
