// @ts-check

export function Size(width=80, height=60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x=0, y=0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function(newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    if (newSize.width < 1) {
      this.size.width = 1;
    } else {
      if ((newSize.width + this.position.x) > this.screenSize.width) {
        // Clip it!
        this.size.width = this.screenSize.width - this.position.x;
      } else {
        this.size.width = newSize.width;
      }
    }
    if (newSize.height < 1) {
      this.size.height = 1;
    } else {
      if ((newSize.height + this.position.y) > this.screenSize.height) {
        // Clip it!
        this.size.height = this.screenSize.height - this.position.y;
      } else {
        this.size.height = newSize.height;
      }
    }
  }

  move(newPosition) {
    if (newPosition.x < 0) {
      this.position.x = 0;
    } else {
      if ((newPosition.x + this.size.width) > this.screenSize.width) {
        // Clip it!
        this.position.x = this.screenSize.width - this.size.width;
      } else {
        this.position.x = newPosition.x;
      }
    }
    if (newPosition.y < 0) {
      this.position.y = 0;
    } else {
      if ((newPosition.y + this.size.height) > this.screenSize.height) {
        // Clip it!
        this.position.y = this.screenSize.height - this.size.height;
      } else {
        this.position.y = newPosition.y;
      }
    }
  }
}

export function changeWindow(programWindow) {
  let tmpWindow = programWindow;
  const newSize = new Size(400, 300);
  const newPos = new Position(100, 150);
  tmpWindow.resize(newSize);
  tmpWindow.move(newPos);
  return tmpWindow;
}