from subprocess import CalledProcessError, Popen, PIPE, STDOUT
import os
import shlex

from SimpleWebSocketServer import SimpleWebSocketServer, WebSocket
p = None

class SimpleEcho(WebSocket):

    def handleMessage(self):
        # echo message back to client
        print self.data
        cmd = 'mitmdump -p 9999 --anticache -s "jalangi2/scripts/proxy.py --inlineIID --inlineSource --analysis analysis-script/' + self.data + '.js"'
        p = Popen(shlex.split(cmd), stdout=PIPE, stdin=PIPE, stderr=PIPE, shell=False)
        self.sendMessage(self.data)

    def handleConnected(self):
        print self.address, 'connected'

    def handleClose(self):
        print self.address, 'closed'

server = SimpleWebSocketServer('', 8000, SimpleEcho)
server.serveforever()