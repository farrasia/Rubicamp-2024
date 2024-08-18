CREATE TABLE jurusan (
    id_jurusan VARCHAR(10) PRIMARY KEY NOT NULL,
    nama_jurusan VARCHAR(50) NOT NULL
);

CREATE TABLE mahasiswa (
    nim INTEGER(8) PRIMARY KEY NOT NULL,
    nama VARCHAR(50) NOT NULL,
    alamat TEXT,
    jurusan VARCHAR(50) NOT NULL,
    id_jurusan VARCHAR(10) NOT NULL,
    FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan)
);

CREATE TABLE dosen (
    id_dosen CHARACTER(4) PRIMARY KEY NOT NULL,
    nama VARCHAR(50) NOT NULL,
    id_jurusan VARCHAR(10),
    FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan)
);

CREATE TABLE matakuliah (
    id_matakuliah CHARACTER(6) PRIMARY KEY NOT NULL,
    nama VARCHAR(50) NOT NULL,
    sks INT,
    id_jurusan VARCHAR(10) NOT NULL,
    id_dosen CHARACTER(4) NOT NULL,
    FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan),
    FOREIGN KEY(id_dosen) REFERENCES dosen(id_dosen)
);

CREATE TABLE matkul_mahasiswa(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_matakuliah CHARACTER(6) NOT NULL,
    nim INTEGER(8) NOT NULL,
    FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim)
);

INSERT INTO jurusan VALUES
    ('STI', 'Sistem dan Teknologi Informasi'),
    ('IF', 'Teknik Informatika'),
    ('EB', 'Teknik Biomedis');

INSERT INTO mahasiswa VALUES 
    (18219020, 'Farras Isfahan', 'Depok Timur', 'Sistem dan Teknologi Informasi', 'STI' ),
    (18220012, 'Gilang Satria', 'Jogja', 'Sistem dan Teknologi Informasi', 'STI' ),
    (13519033, 'Jajang Ruhajan', 'Bandung Barat', 'Teknik Informatika', 'IF'),
    (18121001, 'Keke Siwa', 'Jakarta', 'Teknik Biomedis', 'EB');


INSERT INTO dosen VALUES 
    ('1011', 'Muhammad Prabowo', 'STI'),
    ('1212', 'Nike Armawirawan', 'IF'),
    ('1351', 'Vania Yukatan', 'EB');


INSERT INTO matakuliah VALUES 
    ('II1234', 'Interaksi Manusia Komputer', 3, 'STI', '1011' ),
    ('II2130', 'Manajemen Proyek STI', 3, 'STI', '1011'),
    ('IF1122', 'Data Mining', 4, 'IF', '1212' ),
    ('EL2210', 'Biologi Molekuler', 4, 'EB', '1351' );

INSERT INTO matkul_mahasiswa VALUES 
    (NULL, 'II1234', 18219020),
    (NULL, 'II2130', 18219020),
    (NULL, 'II2130', 18220012),
    (NULL, 'IF1122', 13519033),
    (NULL, 'EL2210', 18121001);


