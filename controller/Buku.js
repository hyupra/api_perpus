const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class Buku {

    static create = async(req, res) => {
        try {
            const data = req.body;
            data.tahun_terbit = parseInt(data.tahun_terbit);
            data.id_pengarang = parseInt(data.id_pengarang);
            // data.tahun_terbit = new Date(data.tahun_terbit);
            await prisma.buku.create({ data: data });
            res.json({ status: true, message: 'Berhasil menambah buku' });
        } catch (error) {
            console.error("Error detail:", error); // Cetak detail error ke terminal/console
            res.json({ status: false, message: 'Terjadi kesalahan saat input buku', error: error.message });
        }
    }


    static find = async(req, res) => {
        try {
            const findData = await prisma.buku.findMany({})
            res.json({ status: true, message: "Berhasil memuat", data: findData })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat menampilkan data' })
        }
    }

    static findById = async(req, res) => {
        try {
            const idBuku = Number(req.params.id)
            const findData = await prisma.buku.findUnique({ where: { id_buku: idBuku } })
            res.json({ status: true, message: "Berhasil memuat", data: findData })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat menampilkan data' })
        }
    }

    static update = async(req, res) => {
        try {
            const idBuku = Number(req.params.id)
            const data = req.body
            data.tahun_terbit = parseInt(data.tahun_terbit);
            await prisma.buku.update({ where: { id_buku: idBuku }, data: data })
            res.json({ status: true, message: 'Berhasil merubah data buku' })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat merubah data' })
        }
    }

    static delete = async(req, res) => {
        try {
            const idBuku = Number(req.params.id)
            await prisma.buku.delete({ where: { id_buku: idBuku } })
            res.json({ status: true, message: 'Berhasil mengahapus buku' })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat menghapus data' })
        }
    }

}

module.exports = Buku