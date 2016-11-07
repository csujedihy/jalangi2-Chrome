import argparse
import zmq

context = zmq.Context()
socket = context.socket(zmq.REQ)
socket.connect('tcp://127.0.0.1:5555')
socket.send('5V20U55WI8.js')
msg = socket.recv()
print msg