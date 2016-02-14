from flask.ext.script import Server, Manager
from flask.ext.migrate import Migrate, MigrateCommand

from server import app, db

migrate = Migrate(app, db, directory='server/migrations')
manager = Manager(app)

manager.add_command('db', MigrateCommand)
manager.add_command("runserver", Server(port=8080))


@manager.command
def clean_db():
    """Drops the db tables."""
    db.drop_all()


@manager.command
def build_db():
    """Builds db that an idiot dropped."""
    db.create_all()

if __name__ == '__main__':
    manager.run()
