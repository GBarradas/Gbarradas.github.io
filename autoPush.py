import git
from git import Repo
from datetime import datetime

my_repo = git.Repo('Gbarradas.github.io')
repo = Repo('Gbarradas.github.io')


def main():
    while True:
        f = open("404.md", "a+", encoding="utf-8")
        texto = datetime.today()
        print(datetime.today())
        if texto == ".":
            f.close()
            repo.git.add_all()
            repo.git.commit('-m', 'commit')
            origin = repo.remote(name='origin')
            origin.push()
            exit()

        f.write(texto)
        f.write("\n")
        if texto == "delete":
            f.truncate(0)


with repo.config_writer() as git_config:
    git_config.set_value('user', 'email', 'gbarradas1@hotmail.com')
    git_config.set_value('user', 'name', 'Gbarradas')

with repo.config_reader() as git_config:
    print(git_config.get_value('user', 'email'))
    print(git_config.get_value('user', 'name'))


# List remotes
print('Remotes:')
for remote in repo.remotes:
    print('- {remote.name} {remote.url}')
try:
    remote = repo.create_remote('origin', url='git@github.com:GBarradas/Gbarradas.github.io.git')
except git.exc.GitCommandError as error:
    print('Error creating remote: {error}')


main()
