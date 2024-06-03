const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class Pengarang {

    static create = async(req, res) => {
        try {
            const data = req.body
            data.tgl_lahir = new Date(data.tgl_lahir)
            await prisma.pengarang.create({ data: data })
            res.json({ status: true, message: 'Berhasil menambah pengarang' })
        } catch (error) {
            console.log(error)
            res.json({ status: false, message: 'Terjadi kesalahan saat input pengarang' })
        }
    }

    static find = async(req, res) => {
        try {
            const findData = await prisma.pengarang.findMany({})
            res.json({ status: true, message: "Berhasil memuat", data: findData })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat menampilkan data' })
        }
    }

    static findById = async(req, res) => {
        try {
            const idPengarang = Number(req.params.id)
            const findData = await prisma.pengarang.findUnique({ where: { id_pengarang: idPengarang } })
            res.json({ status: true, message: "Berhasil memuat", data: findData })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat menampilkan data' })
        }
    }

    static update = async(req, res) => {
        try {
            const idPengarang = Number(req.params.id)
            const data = req.body
            data.tgl_lahir = new Date(data.tgl_lahir)
            await prisma.pengarang.update({ where: { id_pengarang: idPengarang }, data: data })
            res.json({ status: true, message: 'Berhasil merubah pengarang' })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat merubah data' })
        }
    }

    static delete = async(req, res) => {
        try {
            const idPengarang = Number(req.params.id)
            await prisma.pengarang.delete({ where: { id_pengarang: idPengarang } })
            res.json({ status: true, message: 'Berhasil mengahapus pengarang' })
        } catch (error) {
            res.json({ status: false, message: 'Terjadi kesalahan saat menghapus data' })
        }
    }

}

module.exports = Pengarang