CREATE TABLE IF NOT EXISTS Unit (
  id TEXT PRIMARY KEY,
  name TEXT
);

CREATE TABLE IF NOT EXISTS Task (
  id TEXT PRIMARY KEY,
  name TEXT,
  description TEXT,
  goal INTEGER,
  unit_id TEXT,
  active BOOLEAN,
  schedule TEXT,
  notification TIME,
  FOREIGN KEY (unit_id) REFERENCES Unit(id)
);

CREATE TABLE IF NOT EXISTS Record (
  id TEXT PRIMARY KEY,
  task_id TEXT,
  date DATE,
  completed INTEGER,
  FOREIGN KEY (task_id) REFERENCES Task(id)
);
