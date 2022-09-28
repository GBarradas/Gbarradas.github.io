# Guia de Intalação Linux  

[[_TOC_]]  
---

**Nota:** Realizar um backup por precaução
## Montar a pen  
1. Intalar o [rufus](https://rufus.ie/en/)
2. Realizar o download do Ubuntu.
    >- [Ubuntu](https://ubuntu.com/download)
    > - [Fedora](https://getfedora.org/)
    > - [Mint](https://linuxmint.com/)  
    >- [Kali](https://www.kali.org/)

3. Inserir a pen de pelo menos 4GB no computador.
4. Abrir o rufus e selecioar o dispositivo no qual pertende montar o linux e selecionar o ficheiro iso  
5. Apos a pen pronta podemos começãr a preparar o computador para instalarmos o linux

## Criar uma partição  

1. Abra o Gerenciamento de disco
    - Windows+R e `diskmgmt.msg` 
2. Escolha o disco onde pretende que o ubuntu seja instalado e reduza o volume , escolha uma quantidade de voluma e multiplique por 1024.
3. Apos a redução crie um **Novo Volume Simples**  

## Instalar o Linux  
1. Reinicie o pc e insira a pen com a distribuição linux desejada.
2. Ao iniciar o pc entre no menu de boot.
3. Selecione a pen e inicie a instalação.

## Intalar o gcc  
1. abra um terminal `Ctrl+Alt+t`.  
2. no termianal corra as duas linhas de codigo.
``` shell
$ sudo apt update
$ sudo apt install build-essential
```
``` shell
$ gcc --version
```
3. Esta pronto para compilar os sus programas.

## IDE'S  
-  Visual Studio Code
    ``` shell
    $ sudo snap install --classic code
    ```
- VIM
    ``` shell
    $ sudo apt-get update
    $ sudo apt-get -y install vim
    $ sudo apt update
    $ sudo apt -y install vim
    
    ```  
- Sublime
    ``` shell
    $ Sudo add-apt-repository ppa:webupd8team/Sublime-Text-3
    $ sudo apt get update
    $ sudo apt-get install Sublime-Text
    ```  
- Emacs
    ``` shell
    $ sudo apt update
    $ sudo apt install emacs
    ```
    ``` shell
    $ sudo snap install emacs --classic
    ```
## Grub  
Para alterar o tempo ou opção de boot
``` shell
$ sudo nano /etc/default/grub
```
Alterar **_GRUB_DEFAULT_**
 e ou **_GRUB_TIMEOUT_**  

## Outros  

