CREATE TABLE jurusan (
    id_jurusan VARCHAR(10) PRIMARY KEY NOT NULL,
    nama_jurusan VARCHAR(50) NOT NULL
);z

CREATE TABLE mahasiswa (
    nim INTEGER(8) PRIMARY KEY NOT NULL,
    nama VARCHAR(50) NOT NULL,
    alamat TEXT,
    jurusan VARCHAR(50) NOT NULL,
    id_jurusan VARCHAR(10) NOT NULL,
    nilai VARCHAR(2) NOT NULL,
    umur INTEGER NOT NULL,
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


-- Nomor 1
SELECT nama, nama_jurusan FROM mahasiswa, jurusan WHERE mahasiswa.id_jurusan = jurusan.id_jurusan;

-- Nomor 2
SELECT nama FROM mahasiswa WHERE umur < 20;

-- Nomot 3
SELECT * FROM mahasiswa WHERE nilai >= 'B';

-- Nomor 4
SELECT 
    m.nim,
    m.nama,
    SUM(mk.sks) AS total_credits
FROM 
    mahasiswa m
JOIN 
    matkul_mahasiswa mm ON m.nim = mm.nim
JOIN 
    matakuliah mk ON mm.id_matakuliah = mk.id_matakuliah
GROUP BY 
    m.nim, m.nama
HAVING 
    SUM(mk.sks) > 10;

-- Nomor 5
SELECT 
    m.nim,
    m.nama
FROM 
    mahasiswa m
JOIN 
    matkul_mahasiswa mm ON m.nim = mm.nim
JOIN 
    matakuliah mk ON mm.id_matakuliah = mk.id_matakuliah
WHERE
    mk.nama = 'Data Mining'

-- Nomor 6
SELECT 
    d.id_dosen,
    d.nama AS nama_dosen,
    COUNT(DISTINCT mm.nim) AS jumlah_mahasiswa
FROM 
    dosen d
JOIN 
    matakuliah mk ON d.id_dosen = mk.id_dosen
JOIN 
    matkul_mahasiswa mm ON mk.id_matakuliah = mm.id_matakuliah
JOIN 
    mahasiswa m ON mm.nim = m.nim
GROUP BY 
    d.id_dosen, d.nama;

-- Nomor 7
SELECT nim, nama, umur FROM mahasiswa ORDER BY umur ASC

-- Nomor 8
SELECT 
    m.nama AS student_name,
    m.jurusan,
    d.nama AS lecturer_name,
    mk.nama AS course_name
FROM 
    mahasiswa m
JOIN 
    matkul_mahasiswa mm ON m.nim = mm.nim
JOIN 
    matakuliah mk ON mm.id_matakuliah = mk.id_matakuliah
JOIN 
    dosen d ON mk.id_dosen = d.id_dosen
WHERE 
    m.nilai IN ('D', 'E');