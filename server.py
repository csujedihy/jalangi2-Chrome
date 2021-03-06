#!/usr/bin/env python
# Copyright (c) 2012 The Chromium Authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file.
# A simple native messaging host. Shows a Tkinter dialog with incoming messages
# that also allows to send message back to the webapp.
import struct
import sys
import threading
import Queue
import random
import string
import base64
import json
import shlex
import os

import traceback
import logging

from subprocess import CalledProcessError, Popen, PIPE, STDOUT

p = None

# On Windows, the default I/O mode is O_TEXT. Set this to O_BINARY
# to avoid unwanted modifications of the input/output streams.
if sys.platform == "win32":
  import os, msvcrt
  msvcrt.setmode(sys.stdin.fileno(), os.O_BINARY)
  msvcrt.setmode(sys.stdout.fileno(), os.O_BINARY)
# Helper function that sends a message to the webapp.
def send_message(message):
   # Write message size.
  sys.stdout.write(struct.pack('I', len(message)))
  # Write the message itself.
  sys.stdout.write(message)
  sys.stdout.flush()
# Thread that reads messages from the webapp.
def read_thread_func(queue):
  global p
  message_number = 0
  while 1:
    # Read the message length (first 4 bytes).
    text_length_bytes = sys.stdin.read(4)
    if len(text_length_bytes) == 0:
      if queue:
        queue.put(None)
      sys.exit(0)
    # Unpack message length as 4 byte integer.
    text_length = struct.unpack('i', text_length_bytes)[0]
    # Read the text (JSON object) of the message.
    text = sys.stdin.read(text_length).decode('utf-8')
    if queue:
      queue.put(text)
    else:
      # In headless mode just send an echo message back.
      if p:
        p.terminate()
        p = None
      fname = "./analysis-script/" 
      filename = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(10))
      fname += filename
      fname += ".js"
      f = open(fname, 'w')
      base64Decoded = base64.b64decode(text[9:-2])
      f.write(base64Decoded)
      f.close()
      try:
        send_message('{"status": "' + filename + '"}')
      except Exception as e:
        logName = "log.txt"
        logf = open(logName, 'w')
        logf.write(str(e))
        logf.close()
        send_message('{"status": 300}')

def Main():
  read_thread_func(None)
  queue = Queue.Queue()
  thread = threading.Thread(target=read_thread_func, args=(queue,))
  thread.daemon = True
  thread.start()
  while True:
    pass
if __name__ == '__main__':
  Main()