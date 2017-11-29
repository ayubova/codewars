class FileMaster {
  constructor(filepath) {
    this.info = filepath.match(/^(.*\/)([^.]+)\.(.*)$/);
  }

  extension() {
    return this.info[3];
  }

  filename() {
    return this.info[2];
  }

  dirpath() {
    return this.info[1];
  }
}
